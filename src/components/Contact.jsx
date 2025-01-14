import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          ¿Te interesa trabajar con nosotros?
        </h2>
        <form className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="¿De qué manera podemos ayudarte?"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
