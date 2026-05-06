import { motion } from "motion/react";
import { Clock, MapPin, Phone, Utensils } from "lucide-react";
import contactMapImage from "@/assets/images/contact-map.png";

export default function Contact() {
  return (
    <section className="py-xl bg-surface">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid lg:grid-cols-3 gap-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="font-h2 text-3xl mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <MapPin className="text-secondary group-hover:scale-110 transition-transform" />
                <div>
                  <h5 className="font-bold mb-1">Our Location</h5>
                  <p className="text-on-surface-variant">123 Culinary Way, Downtown District<br/>Manhattan, NY 10012</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <Phone className="text-secondary group-hover:scale-110 transition-transform" />
                <div>
                  <h5 className="font-bold mb-1">Phone Number</h5>
                  <p className="text-on-surface-variant">+1 (212) 555-0198</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <Clock className="text-secondary group-hover:scale-110 transition-transform" />
                <div>
                  <h5 className="font-bold mb-1">Opening Hours</h5>
                  <p className="text-on-surface-variant">Tue - Thu: 5:00 PM - 10:00 PM</p>
                  <p className="text-on-surface-variant">Fri - Sat: 5:00 PM - 11:30 PM</p>
                  <p className="text-on-surface-variant">Sun: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="w-full h-full min-h-[400px] bg-surface-container rounded-xl overflow-hidden shadow-inner relative">
              <div className="absolute inset-0 bg-neutral-200">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Map View" src={contactMapImage} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-surface p-4 rounded-xl shadow-xl flex items-center gap-3 border border-outline-variant"
                  >
                    <div className="w-10 h-10 bg-primary text-on-primary rounded-lg flex items-center justify-center">
                      <Utensils size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Luna Bistro</h4>
                      <p className="text-xs text-on-surface-variant">Find your way to us</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
