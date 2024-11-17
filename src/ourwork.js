import { Button, Navbar } from "flowbite-react";
import { Card } from "flowbite-react";
import { Footer } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function OurWork(){
    return (
        <div>
                     <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img src="https://res.cloudinary.com/bn47/image/upload/v1730644986/md-gardeners_uldkoq.png" className="h-24 w-24 mr-3" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MD Landscapers</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <a href="/contactus">
      <Button>Get started</Button></a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" active>About</Navbar.Link>
        <Navbar.Link href="#">Our Work</Navbar.Link>
        <Navbar.Link href="/contactus">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <div className="bg-[url('https://res.cloudinary.com/bn47/image/upload/v1730644003/IMG-20241103-WA0007_dm1ylf.jpg')] bg-cover h-96">
        <div className="w-full bg-black/50 flex flex-col justify-center items-center h-full">
        <p className="text-white text-4xl">Projects Showcase</p>

        </div>
    </div>
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl mt-12 ">Proudly made by <span className="font-bold text-lime-500">MD Landscapers</span></p>
      <div className="grid grid-cols-2  gap-4 w-3/4 mt-8">
      <Card href="#" className="w-full ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Smart Realtors
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Landscape design and implementation in June 2023 for their new offices in Airwing 4ways (Project value: MWK1,300,000)      </p>
    </Card>
    <Card href="#" className="w-full ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      IM Swedish Malawi 
           </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
Provision of landscape maintenance services and garden boy from January 2023-December 2024 (Project Value: MWK6,200,000) </p>
    </Card>

    <Card href="#" className="w-full ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Dr. J Saidi- Landscape Implementation 
           </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      This is a 2 Storey House near Statehouse in area 44 from August 2021- October 2021(Project Value: MWK1,600,000)</p>
    </Card>

    <Card href="#" className="w-full ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     Mr. Nkhata 
           </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Residential landscape Implantation for his residence in Airwing (Project Value MWK2,100,000)      
      </p>
    </Card>

    <Card href="#" className="w-full ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     Ms. Deliby Chimbalu
           </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Residential landscape design and implementation in her residence in new Area 43 (Project Value MWK1,000,100)      </p>
    </Card>

    <Card href="#" className="w-full ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Ms. Tsiranana Chisi
           </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Residential landscape design and implementation for her residence in Airwing (Project Value MWK1,000,000)      </p>
    </Card>
      </div>
    </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4">

        </div>
      </div>
 <div className="flex flex-col justify-center items-center h-screen">
  <div className="h-4/6 w-3/4">
  <Carousel>
  <img src="https://res.cloudinary.com/bn47/image/upload/v1730643999/IMG-20241103-WA0002_fvb3yl.jpg" alt="Image 1" />
<img src="https://res.cloudinary.com/bn47/image/upload/v1730643999/IMG-20241103-WA0001_yr8pl9.jpg" alt="Image 2" />
<img src="https://res.cloudinary.com/bn47/image/upload/v1730644000/IMG-20241103-WA0013_cemvgv.jpg" alt="Image 3" />
<img src="https://res.cloudinary.com/bn47/image/upload/v1730644000/IMG-20241103-WA0004_wfws8h.jpg" alt="Image 4" />
<img src="https://res.cloudinary.com/bn47/image/upload/v1730644001/IMG-20241103-WA0003_lt6xwd.jpg" alt="Image 5" />
<img src="https://res.cloudinary.com/bn47/image/upload/v1730644001/IMG-20241103-WA0016_fupmda.jpg" alt="Image 6" />
<img src="https://res.cloudinary.com/bn47/image/upload/v1730644004/IMG-20241103-WA0025_ftmlfd.jpg" alt="Image 7" />

      </Carousel>
  </div>
 </div>


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
    )
}