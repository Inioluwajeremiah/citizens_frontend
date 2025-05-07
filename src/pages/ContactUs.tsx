const ContactUs = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-primaryColorTint p-8">
      <div className="relative z-10 max-w-lg w-full bg-white rounded-lg shadow-lg p-8 mt-28">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full p-3 border rounded-lg focus:border-primaryColor outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-3 border  rounded-lg focus:border-primaryColor outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 w-full p-3 border  rounded-lg focus:border-primaryColor outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-primaryColor text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
