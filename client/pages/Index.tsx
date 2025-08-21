import { useState } from "react";
import RegistrationStepperModal from "../components/registration/registration";

export default function Index() {
  const [showRegistration, setShowRegistration] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Your Application
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get started by setting up your organization and configuring your data structure.
        </p>

        {!showRegistration && (
          <button
            onClick={() => setShowRegistration(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Registration
          </button>
        )}
      </div>

      {showRegistration && <RegistrationStepperModal />}
    </div>
  );
}
