import { useState, useRef } from "react";
import { Mail, Lock } from "lucide-react";
import logo from "../../../public/logo.png";
import { Link } from "react-router";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailSubmit = () => {
    setError("");
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setStep(2);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleOtpSubmit = () => {
    setError("");
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      setError("Please enter the complete 4-digit OTP");
      return;
    }
    setStep(3);
  };

  const handlePasswordSubmit = () => {
    setError("");
    if (!password) {
      setError("Please enter a new password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (!confirmPassword) {
      setError("Please confirm your password");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    alert("Password reset successful!");
    setStep(1);
    setEmail("");
    setOtp(["", "", "", ""]);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative ">
        <div className="rounded-xl p-6">
          <div className="flex justify-center mb-6">
            <Link to={"/home"}>
              <div className="w-32">
                <img src={logo} alt="logo" />
              </div>
            </Link>
          </div>

          <h2 className="text-xl text-center font-semibold text-orange-500 mb-6">
            {step === 1 && "Forget Password?"}
            {step === 2 && "Verify OTP"}
            {step === 3 && "Reset Password"}
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {step === 1 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative mb-6">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleEmailSubmit}
                className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-full transition duration-200 shadow-lg"
              >
                Reset Password
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                We've sent a 4-digit code to{" "}
                <span className="font-semibold">{email}</span>
              </p>

              <label className="block text-sm font-medium text-gray-700 mb-3">
                Enter OTP
              </label>
              <div className="flex gap-8 justify-center mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={otpRefs[index]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    className="w-14 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                ))}
              </div>

              <button
                onClick={handleOtpSubmit}
                className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-full transition duration-200 shadow-lg mb-3"
              >
                Verify OTP
              </button>

              <button
                onClick={() => setStep(1)}
                className="w-full hover:text-orange cursor-pointer text-gray-600 hover:text-gray-800 text-sm font-medium"
              >
                ← Back to Email
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && handlePasswordSubmit()
                    }
                    placeholder="Confirm new password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={handlePasswordSubmit}
                className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-full transition duration-200 shadow-lg mb-3"
              >
                Reset Password
              </button>

              <button
                onClick={() => setStep(2)}
                className="w-full text-gray-600 hover:text-gray-800 text-sm font-medium"
              >
                ← Back to OTP
              </button>
            </div>
          )}

          <div className="flex justify-center gap-2 mt-6">
            <div
              className={`w-2 h-2 rounded-full ${
                step === 1 ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-2 h-2 rounded-full ${
                step === 2 ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-2 h-2 rounded-full ${
                step === 3 ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
