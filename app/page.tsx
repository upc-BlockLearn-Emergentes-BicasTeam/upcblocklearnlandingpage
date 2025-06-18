import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Shield, BookOpen, Users, Award, CheckCircle, Star, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

export default function BlockLearnLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white px-4 py-3 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xl font-bold">BlockLearn</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#inicio" className="hover:text-blue-200">
              Inicio
            </Link>
            <Link href="#nosotros" className="hover:text-blue-200">
              Nosotros
            </Link>
            <Link href="#servicios" className="hover:text-blue-200">
              Servicios
            </Link>
            <Link href="#planes" className="hover:text-blue-200">
              Planes
            </Link>
            <Link href="#testimonios" className="hover:text-blue-200">
              Testimonios
            </Link>
            <Link href="#contacto" className="hover:text-blue-200">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Bienvenido a<br />
                <span className="text-blue-200">BlockLearn</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-blue-100">Educación, Seguridad y Trazabilidad</h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Nuestra plataforma de blockchain para la gestión de certificados académicos garantiza la autenticidad,
                seguridad y trazabilidad de los logros educativos en blockchain.
              </p>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full">
                Comenzar Ahora
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/dashboard-hero.png"
                  alt="BlockLearn Mobile App"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              BlockLearn es una moderna tecnología educativa diseñada para crear soluciones académicas orientadas a la gestión, la enseñanza técnica, los usuarios y el uso de tecnología blockchain para garantizar seguridad, trazabilidad y acceso a recursos educativos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/nosotros.png"
                alt="Team working"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nuestra Historia</h3>
                <p className="text-gray-600">
                  Fundada con la visión de revolucionar la educación mediante la tecnología blockchain, ofrecemos
                  soluciones innovadoras para la gestión y verificación de certificados académicos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nuestra Misión</h3>
                <p className="text-gray-600">
                  Proporcionar una plataforma segura y confiable que garantice la autenticidad de los logros educativos,
                  eliminando el fraude académico y facilitando la verificación de credenciales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-black-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nuestros Servicios
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-bold text-black">Gestión de Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black">
                  Administración completa de certificados académicos con tecnología blockchain
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg text-black">Plataforma Académica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black">Sistema integral para instituciones educativas y estudiantes</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-black">Certificados Digitales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black">Emisión y verificación de certificados con garantía blockchain</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-black">Recursos de Estudiantes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black">Herramientas y recursos para el desarrollo académico</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-lg text-black">Desarrollo Académico</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-black">Programas de desarrollo y capacitación continua</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Planes de Suscripción</h2>
            <p className="text-gray-600">Elige el plan adecuado</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-black">Lego FACELOCK</CardTitle>
                <div className="text-4xl font-bold text-blue-600 my-4 text-black">Plan Básico</div>
                <CardDescription className="text-black">Perfecto para comenzar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-black">Acceso básico a la plataforma</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-black">Hasta 5 certificados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-black">Soporte por email</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Comenzar Gratis</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 border-2 border-blue-500 bg-gray-800 text-white relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">Más Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Lego FACELOCK</CardTitle>
                <div className="text-4xl font-bold my-4">Plan Premium</div>
                <CardDescription className="text-gray-300">Para instituciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span >Acceso completo a la plataforma</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Certificados ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Soporte prioritario 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>API personalizada</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Comenzar Plan Pro</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">TESTIMONIOS</h2>
            <p className="text-gray-600">
              Lo que nuestros usuarios dicen sobre &quot;FACELOCK&quot; y cómo ha mejorado la seguridad en sus hogares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  &quot;Excelente plataforma para la gestión de certificados académicos. Muy fácil de usar.&quot;
                </p>
                <div>
                  <p className="font-semibold text-black">Lucas M. &quot;Docente&quot;</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  &quot;La seguridad que ofrece blockchain es incomparable. Recomendado 100%.&quot;
                </p>
                <div>
                  <p className="font-semibold text-black">María R. &quot;Estudiante&quot;</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  &quot;Implementamos BlockLearn en nuestra institución y los resultados han sido excelentes.&quot;
                </p>
                <div>
                  <p className="font-semibold text-black">Tatiana V. &quot;Coordinadora Académica&quot;</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  &quot;La verificación de certificados nunca había sido tan sencilla y confiable.&quot;
                </p>
                <div>
                  <p className="font-semibold text-black">Diego A. &quot;Egresado Técnico&quot;</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Image
                src="/contact.png"
                alt="Contact us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <Input placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <Textarea placeholder="Escribe tu mensaje aquí..." rows={4} />
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Enviar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">BlockLearn</span>
              </div>
              <p className="text-gray-400 text-sm">
                Plataforma blockchain para la gestión segura de certificados académicos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#inicio" className="text-gray-400 hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-gray-400 hover:text-white">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-gray-400 hover:text-white">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#planes" className="text-gray-400 hover:text-white">
                    Planes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">Certificados Digitales</li>
                <li className="text-gray-400">Verificación Blockchain</li>
                <li className="text-gray-400">Gestión Académica</li>
                <li className="text-gray-400">Soporte Técnico</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@blocklearn.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lima, Perú</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 BlockLearn. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
