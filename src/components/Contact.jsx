import React from "react";

const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Contáctanos</h2>
          <p className="text-white/80 mb-12">
            ¡Completa los campos de abajo con tus datos de contacto y tu
            propuesta!
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-left mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#417430] rounded-xl border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  placeholder="Juan"
                />
              </div>
              <div>
                <label className="block text-white text-left mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#417430] rounded-xl border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  placeholder="Pérez"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-left mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-[#417430] rounded-xl border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <label className="block text-white text-left mb-2">
                Tu propuesta
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-[#417430] rounded-xl border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-xl hover:bg-white/90 transition-colors font-medium"
            >
              Enviar
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-white/10">
            <a href="tel:+543513476899" className="text-white hover:underline">
              O envíanos un mensaje a (+54) 351 347689
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
