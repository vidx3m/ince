"use client"; // Ensures this runs on the client side only

import { useState } from "react";

export default function QuotePage() {
  const [insuranceType, setInsuranceType] = useState("Auto");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Insurance: ${insuranceType}, Postal Code: ${postalCode}`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Get Your Personalized Quote</h2>
      <form className="p-4 border rounded bg-white shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Insurance Type</label>
          <select
            className="form-select"
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value)}
          >
            <option>Auto</option>
            <option>Home</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Postal Code</label>
          <input
            type="text"
            className="form-control"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter Postal Code"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Get Quote
        </button>
      </form>
    </div>
  );
}
