export function ContactSection({ isEnglish }: { isEnglish: boolean }) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 font-surf text-teal-800">
        {isEnglish ? "Contact" : "Contacto"}
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <p className="mb-6 text-lg text-teal-800">
            {isEnglish
              ? "You can contact us by filling out the form below or via WhatsApp to check availability, rates, and promotions."
              : "Puedes contactarnos llenando el formulario a continuación o por WhatsApp para consultar disponibilidad, tarifas y promociones."}
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder={isEnglish ? "Name" : "Nombre"}
              className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <textarea
              placeholder={isEnglish ? "Message" : "Mensaje"}
              rows={4}
              className="w-full p-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-lg font-semibold"
              disabled
            >
              {isEnglish ? "Send" : "Enviar"}
            </button>
          </form>
        </div>
        <div className="flex-1">
          <div className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100891.71285131396!2d-57.80761367021484!3d-38.13326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d9a72c7db35d%3A0xc0e8b6a9b9d5cf1d!2sChapadmalal%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707669458149!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

