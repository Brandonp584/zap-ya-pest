export default function ContactPage() {
    return (
        <main className="min-h-screen px-6 py-20 max-w-3x1 mx-auto">
            <h1 className="text-4x1 font-bold text-center mb-6">
                Get a Free Pest Control Quote
            </h1>

            <p className="text-center text-gray-600 mb-12">
                Fill out the form below and our team will get back to you shortly.
            </p>

            <form className="space-y-6">
                <div>
                    <label className="blaock mb-2 font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full border rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Phone</label>
                    <input
                        type="tel"
                        placeholder="0400 000 000"
                        className="w-full border rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Message</label>
                    <textarea
                        rows={5}
                        placeholder="Tell us about your pest problem"
                        className="w-full border rounded-mb p-3"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition">
                        Request Quote
                </button>
            </form>
        </main>
    );
}