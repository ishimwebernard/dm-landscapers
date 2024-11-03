import { Button, Navbar } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { Card } from "flowbite-react";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


import './App.css';

function App() {
  return (
    <div className="flex flex-col">
         <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png" className="h-24 w-24 mr-3" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DM Landscapers</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Our Work</Navbar.Link>
        <Navbar.Link href="#">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
 <div className="h-screen">

      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/bn47/image/upload/v1730644005/IMG-20241103-WA0035_huxi65.jpg')] flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
     <div className="w-full bg-black/50 h-full bg flex flex-col items-center justify-center">
     <p className="md:text-6xl sm:text-xl font-light px-20 text-left text-white">
          Bring your outdoor vision to life with <span className="font-bold text-lime-500">innovative, sustainable landscape design</span>. From concept to creation, we craft spaces that inspire and connect with nature.
          </p>
     </div>
        </div>
        <div className="bg-cover bg-[url('https://res.cloudinary.com/bn47/image/upload/v1730644004/IMG-20241103-WA0025_ftmlfd.jpg')] flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div className="w-full bg-black/50 h-full bg flex flex-col items-center justify-center">
     <p className="md:text-6xl sm:text-xl font-light px-20 text-left text-white">
     Ensure your landscape thrives year-round with our <span className="font-bold text-lime-500">comprehensive management solutions</span>. Our expertise keeps your outdoor spaces healthy, vibrant, and eco-friendly.
     </p>
     </div>

        </div>
        <div className="bg-cover bg-[url('https://res.cloudinary.com/bn47/image/upload/v1730643999/IMG-20241103-WA0001_yr8pl9.jpg')] flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div className="w-full bg-black/50 h-full bg flex flex-col items-center justify-center">
     <p className="md:text-6xl sm:text-xl font-light px-20 text-left text-white">
     Achieve perfectly leveled, <span className="font-bold text-lime-500">beautifully shaped landscapes </span> with our laser levelling and precision shaping services. Your space, refined and resilient for lasting impact.
     </p>
     </div>
        </div>
      </Carousel>
    </div>


    <div className="md:w-1/2 flex flex-col justify-center md:m-auto md:p-10 sm:w-full">
    <p className="font-bold text-xl text-center mt-4 mb-4">Our Services</p>
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Landscape architecture</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Explore innovative, sustainable landscape architecture services that blend seamlessly with natural surroundings. From pathways and water features to native plantings, our designs focus on engaging, eco-friendly spaces. Whether for public parks, urban spaces, or private gardens, we bring your vision to life with a balance of functionality and beauty.
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Master planning and urban design</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Transform spaces with our master planning and urban design expertise. We create comprehensive, sustainable designs that enhance functionality, connectivity, and aesthetic appeal for communities and cities. From vibrant public spaces to cohesive neighborhood layouts, our approach prioritizes livability, accessibility, and environmental stewardship.
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Landscape management consultancy</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Optimize and sustain your landscapes with our specialized consultancy services. We provide tailored strategies for effective maintenance, ecological balance, and long-term landscape health. From soil management to plant care, our expert guidance ensures that every outdoor space thrives while meeting sustainability goals.
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Landscape planning consultancy</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Achieve your vision with our landscape planning consultancy services. We develop strategic, site-specific plans that enhance aesthetics, functionality, and ecological resilience. From land assessment to sustainable design, our team guides you through every step, ensuring a balanced, purposeful approach to landscape development.
</p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Top soil, compost and lawn dressing</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Enhance your landscape's health and appearance with our premium topsoil, compost, and lawn dressing solutions. Our high-quality, nutrient-rich blends support robust plant growth, improve soil structure, and promote a lush, green lawn. Perfect for new plantings, soil conditioning, and lawn rejuvenation, our products are designed to enrich your outdoor spaces sustainably.
</p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Laser levelling and precision shaping</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Achieve flawless terrain with our laser levelling and precision shaping services. Using advanced technology, we create perfectly leveled and contoured landscapes that optimize drainage, soil health, and aesthetic appeal. Ideal for lawns, sports fields, and large gardens, our precision approach ensures a stable foundation for any landscape project.
</p>

        </Accordion.Content>
      </Accordion.Panel>

    </Accordion>
    </div>
    <div className="bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/bn47/image/upload/v1730656464/radiant-gradient_ljmty6.png')] py-40">
          <p className="font-bold text-xl text-center mt-4 mb-4 ">Why choose MD LandScapers?</p>
   <div className="bg-transparent flex md:flex-row sm: flex-col sm:space-y-2 md:space-x-4 justify-center items-top px-20 align-top">
    <Card
      className="max-w-sm bg-transparent"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Knowledge      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      We bring a two year plus of knowledge and experience to your project. We have the creativity to offer “Out of the box” ideas and designs. We are familiar with the correct materials and plants to use for your project. We have the experience to do specialized installations our competitors aren’t capable of producing 
      </p>
    </Card>

    <Card
      className="max-w-sm bg-transparent"    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Service      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      We keep our promises and we deliver what we commit to. As a small company, we value YOU as a client and welcome any type of communication to give you the assurance that your project is headed for the right outcome      </p>
    </Card>


    <Card
      className="max-w-sm bg-transparent"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Quality
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      We have an untarnished reputation and will never sacrifice quality over quantity  
      </p>
    </Card>
    </div>
    </div>

 

    <p className="font-bold text-xl text-center mt-4 mb-4">About Us</p>
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png"
              alt="Flowbite Logo"
              name="MD LandScapers"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Nursery Gardening</Footer.Link>
                <Footer.Link href="#">Project Implementation</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="DM LandScapers" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  );
}

export default App;
