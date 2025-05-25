
import { Phone, Wifi, CreditCard, HeadphonesIcon, Star, Shield, Zap, Clock, Home, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Wifi className="h-8 w-8 text-white animate-bounce" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in">Loading...</h2>
          <p className="text-gray-600 animate-fade-in">Please wait while we prepare your experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex flex-col animate-fade-in">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="mb-2">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium tracking-wide">
              Internet Cable Discount
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Fast Internet & Premium TV
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
            Reliable service at affordable prices
          </p>

          <a href="tel:8883295207">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 mb-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now: (888) 329-5207
            </Button>
          </a>


          <p className="text-sm text-blue-200 font-medium">
            No Hold Time - Call Answered in Seconds
          </p>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">New Connection</h3>
              <p className="text-gray-600">Get started with our services</p>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Bill Payment</h3>
              <p className="text-gray-600">Pay your monthly bill easily</p>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Customer Support</h3>
              <p className="text-gray-600">We're here to help</p>
            </CardContent>
          </Card>
        </div>

        {/* Popular Plans Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Popular Plans</h2>
          <p className="text-lg text-gray-600 mb-6">Choose the perfect plan for your home or business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Premium Bundle */}
          <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0 shadow-lg bg-white">
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </span>
            </div>

            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Premium Bundle</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">$89.99</span>
                <span className="text-gray-500">/mo</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">200+ HD Channels</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">500 Mbps Internet</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Free Installation</span>
                </div>
              </div>

              <a href="tel:8883295207" >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Call to Order
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Internet Only */}
          <Card className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0 shadow-lg bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Internet Only</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">$49.99</span>
                <span className="text-gray-500">/mo</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">High-Speed Internet</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reliable Connection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>

              <a href="tel:8883295207">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Call to Order
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Features Section - New Content */}
        <div className="py-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Experience the best in internet and TV services</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-center">Speeds up to 1 Gbps for seamless streaming and gaming</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Secure Network</h3>
              <p className="text-gray-600 text-center">Advanced security features to protect your home network</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">99.9% Uptime</h3>
              <p className="text-gray-600 text-center">Reliable service with minimal interruptions</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-center">Expert assistance available whenever you need it</p>
            </div>
          </div>
        </div>

        {/* Happy Customers Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Happy Customers</h2>
          <p className="text-xl text-gray-600 mb-8">What our customers say about us</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="group hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"The Premium Bundle has been amazing for our family. Crystal clear TV channels and super-fast internet at a great price!"</p>
                <p className="font-semibold text-gray-800">- Sarah Johnson</p>
                <p className="text-sm text-gray-500">Customer since 2022</p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="group hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"Customer service is excellent! They helped me choose the perfect plan for my needs and installation was quick and professional."</p>
                <p className="font-semibold text-gray-800">- Mark Thompson</p>
                <p className="text-sm text-gray-500">Customer since 2021</p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="group hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"I've never experienced such reliable internet service before. No more buffering during important video calls or streaming movies!"</p>
                <p className="font-semibold text-gray-800">- Jessica Williams</p>
                <p className="text-sm text-gray-500">Customer since 2023</p>
              </CardContent>
            </Card>
          </div>
        </div>



        {/* Bottom CTA */}
        <div className="text-center">
          <a href="tel:8883295207">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 mb-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now: (888) 329-5207
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile-only Footer Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg z-50">
        <div className="flex flex-col items-center py-3">
          <a href="tel:8883295207">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 mb-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now: (888) 329-5207
            </Button>
          </a>

          <p className="text-center text-white-800">Feel Free To Contact Us</p>
        </div>

      </div>

      {/* Simplified Footer - hidden on mobile when navbar is present */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 mt-auto pb-30 md:pb-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300">© 2025 Cable Internet Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
