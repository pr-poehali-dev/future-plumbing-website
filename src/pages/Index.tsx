import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Droplet',
      title: 'Установка сантехники',
      description: 'Монтаж смесителей, раковин, унитазов, душевых кабин',
      price: 'от 2 500 ₽'
    },
    {
      icon: 'Waves',
      title: 'Ремонт водопровода',
      description: 'Устранение протечек, замена труб, модернизация системы',
      price: 'от 1 800 ₽'
    },
    {
      icon: 'Thermometer',
      title: 'Отопление',
      description: 'Монтаж радиаторов, теплых полов, обслуживание котлов',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Wrench',
      title: 'Диагностика систем',
      description: 'Проверка давления, поиск скрытых протечек, тепловизор',
      price: 'от 1 500 ₽'
    },
    {
      icon: 'Construction',
      title: 'Аварийный выезд',
      description: 'Срочное устранение протечек и поломок 24/7',
      price: 'от 2 000 ₽'
    },
    {
      icon: 'ShowerHead',
      title: 'Сантехника под ключ',
      description: 'Полная разводка воды и канализации в новостройках',
      price: 'от 15 000 ₽'
    }
  ];

  const portfolio = [
    {
      title: 'Современная ванная комната',
      description: 'Установка премиум-сантехники Grohe',
      image: 'https://cdn.poehali.dev/projects/26f641e4-0302-41da-a29b-4e55c49fad31/files/b33ca06d-50e3-4116-8884-7eafe58dfdd9.jpg'
    },
    {
      title: 'Техническое оборудование',
      description: 'Монтаж системы водоснабжения',
      image: 'https://cdn.poehali.dev/projects/26f641e4-0302-41da-a29b-4e55c49fad31/files/e757f3ff-71e3-4884-b793-52e3a54e2d80.jpg'
    },
    {
      title: 'Профессиональный подход',
      description: 'Работа с современным оборудованием',
      image: 'https://cdn.poehali.dev/projects/26f641e4-0302-41da-a29b-4e55c49fad31/files/e30f11fb-68a2-411b-915c-6f625bdf2128.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      text: 'Отличная работа! Быстро заменили все трубы в квартире. Чисто, аккуратно, профессионально.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      text: 'Вызывали для установки душевой кабины. Мастер приехал вовремя, все объяснил и сделал качественно.',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      text: 'Спасибо за аварийный выезд ночью! Устранили протечку за час. Настоящие профессионалы!',
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Droplet" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                АкваТех
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'services', 'price', 'portfolio', 'about', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary font-medium' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'price' && 'Прайс'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'about' && 'О нас'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Работаем с 2010 года
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Сантехнические услуги
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    нового уровня
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Современное оборудование, опытные мастера и гарантия качества на все виды работ
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    <Icon name="CalendarCheck" size={20} />
                    Записаться на осмотр
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Icon name="Calculator" size={20} />
                    Рассчитать стоимость
                  </Button>
                </div>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">15</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Аварийная служба</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://cdn.poehali.dev/projects/26f641e4-0302-41da-a29b-4e55c49fad31/files/e757f3ff-71e3-4884-b793-52e3a54e2d80.jpg"
                  alt="Современное сантехническое оборудование"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Наши услуги</Badge>
              <h2 className="text-4xl font-bold mb-4">Полный спектр сантехнических работ</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                От простого ремонта до комплексной установки систем водоснабжения
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Подробнее
                        <Icon name="ArrowRight" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Прайс-лист</Badge>
              <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Фиксированная стоимость работ без скрытых платежей
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="Droplet" className="text-primary" size={24} />
                      <span className="text-lg font-semibold">Установка смесителей</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-3 text-base">
                      <div className="flex justify-between">
                        <span>Смеситель на кухню</span>
                        <span className="font-semibold">2 500 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Смеситель в ванную</span>
                        <span className="font-semibold">3 000 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Термостатический смеситель</span>
                        <span className="font-semibold">4 500 ₽</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="Bath" className="text-primary" size={24} />
                      <span className="text-lg font-semibold">Сантехника</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-3 text-base">
                      <div className="flex justify-between">
                        <span>Установка унитаза</span>
                        <span className="font-semibold">3 500 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Установка раковины</span>
                        <span className="font-semibold">2 800 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Монтаж ванны/душевой кабины</span>
                        <span className="font-semibold">5 000 ₽</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="Wrench" className="text-primary" size={24} />
                      <span className="text-lg font-semibold">Ремонт и замена труб</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-3 text-base">
                      <div className="flex justify-between">
                        <span>Замена участка трубы (до 1м)</span>
                        <span className="font-semibold">1 800 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Устранение протечки</span>
                        <span className="font-semibold">2 000 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Разводка водопровода</span>
                        <span className="font-semibold">от 8 000 ₽</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Наши работы</Badge>
              <h2 className="text-4xl font-bold mb-4">Портфолио проектов</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Примеры выполненных работ с использованием современного оборудования
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.map((project, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">О компании</Badge>
                <h2 className="text-4xl font-bold mb-6">15 лет профессионального опыта</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    АкваТех — современная компания, специализирующаяся на всех видах сантехнических работ. 
                    Мы используем только качественное оборудование ведущих мировых производителей.
                  </p>
                  <p>
                    Наша команда состоит из сертифицированных специалистов с многолетним опытом работы. 
                    Мы постоянно совершенствуем свои навыки и следим за новыми технологиями в отрасли.
                  </p>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Гарантия качества</h4>
                      <p className="text-muted-foreground">До 5 лет гарантии на все виды работ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Оперативность</h4>
                      <p className="text-muted-foreground">Выезд мастера в день обращения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Профессионализм</h4>
                      <p className="text-muted-foreground">Сертифицированные специалисты</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <Icon name="Users" className="mx-auto mb-3 text-primary" size={40} />
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных проектов</div>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Star" className="mx-auto mb-3 text-primary" size={40} />
                  <div className="text-3xl font-bold mb-2">4.9</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Shield" className="mx-auto mb-3 text-primary" size={40} />
                  <div className="text-3xl font-bold mb-2">5 лет</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </Card>
                <Card className="p-6 text-center">
                  <Icon name="Zap" className="mx-auto mb-3 text-primary" size={40} />
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Отзывы</Badge>
              <h2 className="text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Реальные отзывы от довольных клиентов
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="font-semibold">{testimonial.name}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Badge className="mb-4">Контакты</Badge>
                <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <a href="tel:+74951234567" className="text-lg text-primary hover:underline">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@akvatech.ru" className="text-lg text-primary hover:underline">
                        info@akvatech.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <p className="text-lg text-muted-foreground">
                        Москва, ул. Примерная, д. 123
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Режим работы</div>
                      <p className="text-lg text-muted-foreground">
                        Пн-Вс: 8:00 - 22:00<br />
                        Аварийная служба: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Заказать обратный звонок</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Услуга</label>
                    <Input placeholder="Какая услуга вас интересует?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea placeholder="Опишите вашу задачу" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplet" className="text-primary" size={28} />
                <span className="text-xl font-bold">АкваТех</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональные сантехнические услуги в Москве с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Установка сантехники</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт водопровода</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отопление</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аварийный выезд</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@akvatech.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 АкваТех. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
