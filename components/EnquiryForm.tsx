"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const enquiry = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      website: String(data.get("website") || ""),
      business_type: String(data.get("type") || ""),
      product_category: String(data.get("category") || ""),
      catalogue: String(data.get("catalogue") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="success-box">
        <div className="success-icon">✓</div>

        <h3>Enquiry submitted successfully</h3>

        <p>
          Thank you for contacting Northbridge Commerce.
          Our team will review your enquiry and get back to you.
        </p>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Full Name
          <input
            name="name"
            required
            placeholder="Your full name"
          />
        </label>

        <label>
          Company Name
          <input
            name="company"
            required
            placeholder="Company name"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Business Email
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.co.uk"
          />
        </label>

        <label>
          Phone Number
          <input
            name="phone"
            placeholder="+44 ..."
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Website
          <input
            type="url"
            name="website"
            placeholder="https://..."
          />
        </label>

        <label>
          Your Business Type

          <select
            name="type"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>

            <option value="Brand">Brand</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Wholesaler">Wholesaler</option>
            <option value="Distributor">Distributor</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <div className="form-row">
        <label>
          Product Category
          <input
            name="category"
            placeholder="e.g. Home, Beauty, Sports"
          />
        </label>

        <label>
          Product / Catalogue Link
          <input
            name="catalogue"
            placeholder="Optional link"
          />
        </label>
      </div>

      <label>
        Message

        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us about your products, supply capability and what you would like to discuss."
        />
      </label>

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      <button
        className="button button-dark"
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Submit Partnership Enquiry"}
      </button>

      <p className="form-note">
        We only use information submitted here to respond
        to your business enquiry.
      </p>
    </form>
  );
}