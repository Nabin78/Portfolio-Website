import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
  email: string;
  phone: string;
  location: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  phone,
  location,
}) => {
  return (
    <section id="contact" className="py-2">
      <div className="section-container">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="mt-8 max-w-lg mx-auto bg-white rounded-xl shadow-sm p-8 animate-slide-up">
          <div className="space-y-6">
            <div className="contact-item">
              <div className="contact-icon text-gray-700">
                <Mail size={20} />
              </div>
              <a
                href={`mailto:${email}`}
                className="text-lg hover:text-data-blue transition-colors"
              >
                {email}
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon text-gray-700">
                <Phone size={20} />
              </div>
              <a
                href={`tel:${phone}`}
                className="text-lg hover:text-data-blue transition-colors"
              >
                {phone}
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon text-gray-700">
                <MapPin size={20} />
              </div>
              <span className="text-lg">{location}</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-data-gray">
              Looking forward to exploring data opportunities and challenges
              together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
