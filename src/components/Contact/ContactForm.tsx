import type React from "react";

import { useState } from "react";
import { Toaster, toast } from "sonner";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Importar EmailJS dinámicamente
      const emailjs = await import("@emailjs/browser");

      // Configurar EmailJS (reemplaza con tus credenciales)
      const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;

      // Preparar los datos para EmailJS
      const templateParams = {
        name: `${formData.nombre} `,
        lastname: `${formData.apellido}`,
        phone: formData.telefono,
        email: formData.email,
        message: formData.mensaje,
        to_name: "Inside UCO", // Nombre del destinatario
      };

      // Enviar email
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus({ loading: false, success: true, error: null });

      // Limpiar formulario después del éxito
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

      toast.success("Mensaje enviado con éxito", {
        description:
          "Gracias por contactarnos. Nos pondremos en contacto a la brevedad. ",
        duration: 10000,
        action: {
          label: "X",
          onClick: () => {
            window.close();
          },
        },
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        loading: false,
        success: false,
        error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      });
       toast.error("Error al enviar su consulta", {
        description:
          "Hubo un problema al enviar su consulta ",
        duration: 10000,
        action: {
          label: "X",
          onClick: () => {
            window.close();
          },
        },
      });
    }
  };

  return (
    <section id="contacto" className="bg-[#d8d4ca] py-28 ">
      <div className="md: w-[80vw] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2
            style={{ fontFamily: "NolanNextBold" }}
            className="text-4xl md:text-[40px] font-bold mb-2"
          >
            Contacto
          </h2>
          <p style={{ fontFamily: "NolanNextRegular" }} className="text-xl md:text-[25px]">
            Completá el formulario para solicitar una entrevista exclusiva
          </p>
        </div>

   
        {/* {status.success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            ¡Mensaje enviado exitosamente! Te contactaremos pronto.
          </div>
        )}

   
        {status.error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {status.error}
          </div>
        )} */}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="space-y-6 md:col-span-3">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  disabled={status.loading}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="w-full px-3 py-3 border border-black bg-[#d8d4ca] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[1.5px] focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={status.loading}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="w-full border border-black  px-3 py-3  bg-[#d8d4ca] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[1.5px] focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6 md:col-span-3">
              {/* Apellido */}
              <div>
                <label
                  htmlFor="apellido"
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  required
                  disabled={status.loading}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="w-full border-black  px-3 py-3 border bg-[#d8d4ca] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[1.5px] focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              {/* Número de teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  disabled={status.loading}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="w-full border-black  px-3 py-3 border bg-[#d8d4ca] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-[1.5px] focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="md:row-span-2 md:pl-6 md:col-span-6">
              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="block text-sm md:text-base font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={2}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  placeholder="Escriba su mensaje aquí..."
                  required
                  disabled={status.loading}
                  style={{ fontFamily: "NolanNextRegular" }}
                  className="w-full border-black  px-3 py-3 border bg-[#d8d4ca] text-gray-900 placeholder-gray-500 resize-y focus:outline-none focus:ring-[1.5px] focus:ring-gray-900 focus:border-transparent h-32 md:h-full disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="bg-black mt-6 flex cursor-pointer text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-[1.5px] focus:ring-gray-900 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {status.loading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                <span
                  className="text-base font-normal w-full"
                  style={{ fontFamily: "NolanNextRegular" }}
                >
                  {status.loading ? "Enviando..." : "Enviar"}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
}
