import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const lucanCoords = { lat: 53.35715, lng: -6.44856 };

export default function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]+$/; // alphabets + spaces only

    if (!name || !email || !message) {
      setStatus({ message: "⚠️ Please fill out all fields.", type: "error" });
      return;
    }

    if (!nameRegex.test(name)) {
      setStatus({
        message: "❌ Name should contain alphabets only.",
        type: "error",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setStatus({
        message: "❌ Please enter a valid email address.",
        type: "error",
      });
      return;
    }

    // Simulated success
    setStatus({ message: "✅ Message sent successfully!", type: "success" });
    form.reset();
  }

  return (
    <section className="grid lg:grid-cols-2 gap-8">
      {/* Form */}
      <div>
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="mt-4 text-black/70 dark:text-white/70">
          Say hello — I’ll reply within 24–48 hours.
        </p>
        <form className="mt-8 grid gap-4 max-w-lg" onSubmit={handleSubmit}>
          <label className="grid gap-1">
            <span className="text-sm text-black/70 dark:text-white/70">
              Name
            </span>
            <input
              name="name"
              className="rounded-lg border px-3 py-2 outline-none"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-black/70 dark:text-white/70">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="rounded-lg border px-3 py-2 outline-none"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm text-black/70 dark:text-white/70">
              Message
            </span>
            <textarea
              rows="5"
              name="message"
              className="resize-y rounded-lg border px-3 py-2 outline-none"
              placeholder="How can I help?"
            />
          </label>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="mt-2 w-fit rounded-xl border px-6 py-3 text-sm font-semibold
                         border-black text-black hover:bg-black hover:text-white
                         dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Send
            </button>
            {status.message && (
              <span
                className={`text-sm font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-lg border">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={lucanCoords}
            zoom={14}
          >
            <Marker position={lucanCoords} />
          </GoogleMap>
        ) : (
          <p className="flex items-center justify-center h-full">
            Loading map...
          </p>
        )}
      </div>
    </section>
  );
}
