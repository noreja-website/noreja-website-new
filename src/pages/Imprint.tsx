import { motion } from "framer-motion";
import { Building, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Imprint() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Legal{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Information
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Official company information and legal disclosures as required by law.
          </p>
        </motion.div>

        {/* Company Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-card/50 border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-6 h-6 mr-3 text-noreja-tertiary" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Legal Entity</h3>
                <p className="text-muted-foreground">
                  Noreja Technologies Inc.<br />
                  Delaware Corporation<br />
                  Registration Number: DE-123456789
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-noreja-tertiary" />
                    Headquarters
                  </h3>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Building className="w-4 h-4 mr-2 text-noreja-tertiary" />
                    European Office
                  </h3>
                  <p className="text-muted-foreground">
                    Europaplatz 1<br />
                    10557 Berlin<br />
                    Germany
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-card/50 border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-noreja-tertiary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-noreja-tertiary" />
                    Email Addresses
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>General Inquiries: info@noreja.com</p>
                    <p>Support: support@noreja.com</p>
                    <p>Legal: legal@noreja.com</p>
                    <p>Press: press@noreja.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-noreja-tertiary" />
                    Phone Numbers
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>US: +1 (555) 123-4567</p>
                    <p>EU: +49 30 12345678</p>
                    <p>Support: +1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Legal Representatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-card/50 border-border/40">
            <CardHeader>
              <CardTitle>Legal Representatives</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Chief Executive Officer</h3>
                <p className="text-muted-foreground">Dr. Alex Chen</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Chief Technology Officer</h3>
                <p className="text-muted-foreground">Sarah Rodriguez</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Data Protection Officer</h3>
                <p className="text-muted-foreground">
                  Dr. Emily Foster<br />
                  Email: dpo@noreja.com
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Regulatory Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-card/50 border-border/40">
            <CardHeader>
              <CardTitle>Regulatory & Tax Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Tax Identification</h3>
                <p className="text-muted-foreground">
                  US Federal Tax ID: 12-3456789<br />
                  EU VAT Number: DE123456789<br />
                  Sales Tax Permit: CA-ST-123456
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Professional Liability Insurance</h3>
                <p className="text-muted-foreground">
                  Provider: TechInsure Professional<br />
                  Policy Number: TI-2024-789456<br />
                  Coverage: $10,000,000 USD
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Disclaimers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Card className="bg-card/50 border-border/40">
            <CardHeader>
              <CardTitle>Legal Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Website Content</h3>
                <p>
                  The information provided on this website is for general informational purposes only. 
                  While we strive to keep the information up-to-date and accurate, we make no representations 
                  or warranties of any kind about the completeness, accuracy, reliability, or availability 
                  of the website or its content.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-foreground">External Links</h3>
                <p>
                  Our website may contain links to external websites that are not provided or maintained 
                  by Noreja Technologies Inc. We do not guarantee the accuracy, relevance, timeliness, 
                  or completeness of any information on these external websites.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-foreground">Intellectual Property</h3>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of Noreja Technologies Inc. or its content suppliers and is protected 
                  by international copyright laws.
                </p>
              </div>

              <div className="pt-4 border-t border-border/40">
                <p className="text-xs">
                  Last updated: January 15, 2024<br />
                  For questions regarding this imprint, please contact: legal@noreja.com
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}