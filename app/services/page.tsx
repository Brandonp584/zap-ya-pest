export default function ServicesPage() {
    const services = [
        {
            title: "General Pest Control",
            description:
                "Comprehensive pest control solutions for homes and businesses across the Moreton Bay Region and Sunshine Coast.",
        },
        {
            title: "Termite Inspection & Treatment",
            description:
                "Protect your property from costly termite damage with expert inspections and treatments tailored to local conditions.",
        },

        {
            title: "Rodent Control",
            description:
                "Effective rodent removal and prevention to keep your space safe and Hygienic"
        },
        {
            title: "Spider & Insect Control",
            description: "Targeted treatments to eliminate spiders, ants, cockroaches, and other insects.",
        },
    ];

    return (
        <main className="min-h-screen px-6 py-20">
            <h1 className="text-4x1 font-bold text-center mb-12">
                Our Pest Control Services
            </h1>

            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Zap Ya Pest provides professional pest control services across the
                Moreton Bay Region and Sunshine Coast. We service homes and businesses
                with reliable, long-term pest solutions.
            </p>

            <div className="grid gap-8 max-w-6x1 mx-auto md:grid-cols-2">
                {services.map((service) => (
                    <div
                    key={service.title}
                    className="border rounded-lg p-8 hover:shadow-lg transition">
                        <h2 className="text-2x1 font-semibold mb-4">
                            {service.title}
                        </h2>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}