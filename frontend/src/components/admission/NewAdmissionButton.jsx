import { useState } from "react";
import axios from "axios";
import { FaGraduationCap, FaTimes, FaArrowRight } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export default function NewAdmissionButton() {
const [isOpen, setIsOpen] = useState(false);


const [formData, setFormData] = useState({
    student_name: "",
    mobile: "",
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [registration, setRegistration] = useState(null);

const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));

    setError("");
    setSuccess("");
};

const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setRegistration(null);

    if (!formData.student_name.trim()) {
        setError("Please enter student name.");
        return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
    }

    try {
        setLoading(true);

        const response = await axios.post(
            `${API_URL}/admission/verify-enquiry`,
            {
                student_name: formData.student_name.trim(),
                mobile: formData.mobile,
            }
        );

        if (response.data.success) {
            setRegistration(response.data.data);
            setSuccess(response.data.message);
        }
    } catch (err) {
        if (err.response?.status === 404) {
            setError(
                err.response.data.message ||
                "Please fill out the enquiry form first to proceed with admission."
            );
        } else if (err.response?.status === 422) {
            const errors = err.response.data.errors;

            setError(
                errors
                    ? Object.values(errors).flat()[0]
                    : "Please check the entered details."
            );
        } else {
            setError(
                err.response?.data?.message ||
                "Unable to verify enquiry. Please try again."
            );
        }
    } finally {
        setLoading(false);
    }
};

const closeModal = () => {
    setIsOpen(false);
    setFormData({ student_name: "", mobile: "" });
    setError("");
    setSuccess("");
    setRegistration(null);
};

return (
    <>
        {/* New Admission Button */}
        <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-bold text-gray-900 shadow-md transition hover:bg-yellow-400 hover:shadow-lg"
        >
            <FaGraduationCap className="text-xl" />
            New Admission
        </button>

        {/* Admission Modal */}
        {isOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6">
                <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">

                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute right-5 top-5 text-gray-500 hover:text-red-500"
                    >
                        <FaTimes size={20} />
                    </button>

                    <div className="mb-6 text-center">
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                            <FaGraduationCap size={32} />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800">
                            New Admission
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Verify your existing enquiry to proceed with admission.
                        </p>
                    </div>

                    {!registration ? (
                        <form onSubmit={handleSubmit}>

                            <div className="mb-4">
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Student Name *
                                </label>

                                <input
                                    type="text"
                                    name="student_name"
                                    value={formData.student_name}
                                    onChange={handleChange}
                                    placeholder="Enter student full name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                                    required
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Father's / Mother's Mobile Number *
                                </label>

                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "").slice(0, 10);

                                        setFormData((prev) => ({
                                            ...prev,
                                            mobile: value,
                                        }));

                                        setError("");
                                    }}
                                    placeholder="Enter registered mobile number"
                                    maxLength={10}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                                    required
                                />
                            </div>

                            {error && (
                                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                                    <p>{error}</p>

                                    {error.toLowerCase().includes("enquiry") && (
                                        <a
                                            href="/enquiry"
                                            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-gray-900 hover:bg-yellow-400"
                                        >
                                            Fill Enquiry Form
                                            <FaArrowRight />
                                        </a>
                                    )}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-500 py-3 font-bold text-gray-900 transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Verifying..." : "Verify Details"}
                                {!loading && <FaArrowRight />}
                            </button>

                        </form>
                    ) : (
                        <div className="text-center">

                            <div className="mb-5 rounded-xl border border-green-200 bg-green-50 p-5">
                                <div className="mb-2 text-3xl text-green-600">
                                    ✓
                                </div>

                                <h3 className="font-bold text-green-800">
                                    Enquiry Verified Successfully!
                                </h3>

                                <p className="mt-2 text-sm text-green-700">
                                    {success}
                                </p>
                            </div>

                            <div className="space-y-3 rounded-lg bg-gray-50 p-4 text-left">
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Student Name
                                    </p>
                                    <p className="font-semibold text-gray-800">
                                        {registration.student_name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Verified Contact Number
                                    </p>
                                    <p className="font-semibold text-gray-800">
                                        {registration.mobile}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 text-sm text-gray-600">
                                Your enquiry has been matched. Mobile OTP verification will be the next step.
                            </p>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="mt-5 w-full rounded-lg bg-yellow-500 py-3 font-bold text-gray-900 hover:bg-yellow-400"
                            >
                                Close
                            </button>

                        </div>
                    )}
                </div>
            </div>
        )}
    </>
);


}
