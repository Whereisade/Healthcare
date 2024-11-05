import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const servicesData = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730294123/64548807cef5ac7703bcd05e_pediatric-icon-doctr-x-webflow-template_e0l0xl.svg', 
    title: 'Pediatric',
    description: 'Focusing on the unique health needs of infants, children, and teens',
    link: 'pediatric',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730461393/DocVisit_1300x_2x_hgpop6.jpg',
    heading:"Nurturing Your Child's Health",
    p1: "Our pediatric department is dedicated to providing comprehensive and compassionate care for children of all ages, from newborns to adolescents. We understand that children have unique healthcare needs, and our team of experienced pediatricians, nurses, and specialists is committed to providing personalized care that meets those needs.",
    p2:"We believe in building strong relationships with our patients and their families. We take the time to listen to your concerns, answer your questions, and provide education and support to help you make informed decisions about your child's health. We strive to create a welcoming and child-friendly environment where your child feels comfortable and safe.",
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730294405/645b1fe1f0b7307cbda45b74_cardiology-icon-doctr-x-webflow-template_jws6op.svg',
    title: 'Cardiology',
    description: 'Experts in keeping your heart healthy and strong',
    link: 'cardiology',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730461292/66cd95d51aab286e70bac95b_services-main-img-02-p-1600_flpwfv.jpg',
    heading: "Keeping Your Heart Healthy",
    p1: "The cardiology department is committed to providing comprehensive heart care for patients of all ages. Our team of expert cardiologists utilizes the latest technology and evidence-based practices to diagnose, treat, and prevent heart disease.",
    p2: "Our cardiologists are board-certified and highly experienced in all aspects of cardiovascular care. We are dedicated to providing personalized treatment plans tailored to each patient's individual needs.",
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323504/645b1fec42ee1248ee1947e1_ophthalmology-icon-doctr-x-webflow-template_picmme.svg',
    title: 'Ophthalmology',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730461499/66cd961508e3940e59509e36_services-main-img-06-p-1600_fyzwpk.jpg',
    description: 'Comprehensive eye care for all ages, including vision correction and disease treatment',
    link: 'ophthalmology',
    heading: "Your Vision, Our Priority",
    p1: "Our ophthalmology department provides comprehensive eye care for patients of all ages. Our team of skilled ophthalmologists and optometrists use advanced technology and techniques to diagnose and treat a wide range of eye conditions, from common refractive errors to complex eye diseases.",
    p2: "We utilize state-of-the-art diagnostic equipment and surgical technology to ensure accurate diagnoses and effective treatment.",
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323532/645b1ffbd34ea29eb5000ff6_phatalogy-icon-doctr-x-webflow-template_mcbvip.svg',
    title: 'Pathology',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730448558/655adf0463c953059316e7cf_demystifying-common-myths-about-vaccines_jh9sai.jpg',
    description: 'Providing essential diagnostic services to guide your healthcare journey',
    link: 'pathology',
    heading: "Accurate Diagnosis, Guiding Treatment",
    p1: "The pathology department plays a critical role in patient care by providing accurate and timely diagnostic information. Our team of highly trained pathologists and laboratory professionals use advanced techniques to analyze tissue samples, blood, and other body fluids, aiding in the diagnosis and management of various diseases.",
    p2: "Our laboratory is accredited by relevant accrediting bodies and adheres to the highest standards of quality and accuracy.",
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323559/645b200363154f4c5a050e8f_pulmonology-icon-doctr-x-webflow-template_ccsfvi.svg',
    title: 'Pulmonology',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730449983/6555b011943eef6ca327e830_navigating-womens-health-insights-and-advice_eockgv.jpg',
    description: 'Specializing in the diagnosis and treatment of lung conditions and respiratory diseases',
    link: 'pulmonology',
    heading: "Breathe Easier with Expert Care",
    p1: "The pulmonology department specializes in the diagnosis and treatment of lung diseases and respiratory conditions. Our team of experienced pulmonologists and respiratory therapists provide comprehensive care to help patients breathe easier and improve their quality of life.",
    p2: "We offer a range of respiratory therapies, including oxygen therapy, pulmonary rehabilitation, and mechanical ventilation, to support patients with breathing difficulties.",
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323611/645b200cd34ea25c2c001015_orthopedic-icon-doctr-x-webflow-template_du5vs1.svg',
    title: 'Orthopedic',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730449879/655ad6500d6c0d2c7e49ed6f_10-essential-tips-for-a-healthier-pregnancy_dphida.jpg',
    description: 'Restoring mobility and relieving pain through expert orthopedic care',
    link: 'orthopedic',
    heading: "Restoring Mobility, Relieving Pain",
    p1: "The orthopedic department at [Hospital Name] provides comprehensive care for musculoskeletal conditions affecting the bones, joints, muscles, tendons, and ligaments. Our team of orthopedic surgeons, physiatrists, and therapists work together to help patients regain mobility, reduce pain, and improve their quality of life.",
    p2: "We provide comprehensive rehabilitation services, including physical therapy, occupational therapy, and pain management, to help patients recover from injuries and surgeries",
  },
  {
    id: 7,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323635/645b201951c157f13a1683c7_general-medicine-icon-doctr-x-webflow-template_qb4kgv.svg',
    title: 'General Medicine',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730125539/664b27562d03064468a455b3_blogimage2_i8wqte.png',
    description: 'Providing preventive care, diagnosis, and treatment for a wide range of health concerns',
    link: 'generalMedicine',
    heading: "Your Partner in Health",
    p1: "Our general medicine department provides primary care services for adults. Our team of experienced physicians and nurses focus on preventive care, health maintenance, and the diagnosis and treatment of common medical conditions.",
    p2: "We believe in building strong relationships with our patients and providing personalized care tailored to your individual needs.",
  },
  {
    id: 8,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323671/645b202051c15753e2168432_oncology-icon-doctr-x-webflow-template_ci0osa.svg',
    title: 'Oncology',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1729669012/steptodown.com114884_st9ik6.jpg',
    description: 'Providing compassionate and advanced cancer care',
    link: 'oncology',
    heading: "Comprehensive Cancer Care",
    p1: "The oncology department provides comprehensive cancer care, from prevention and early detection to advanced treatment and survivorship support. Our multidisciplinary team of oncologists, nurses, and other healthcare professionals work together to provide personalized care and support to patients and their families.",
    p2: "We are committed to providing compassionate, evidence-based cancer care that focuses on the whole person, not just the disease.",
  },
  {
    id: 9,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323693/645b202f046e971060b215a4_gastroenterology-icon-doctr-x-webflow-template_c6embm.svg',
    title: 'Gastroenterology',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1729669012/steptodown.com114884_st9ik6.jpg',
    description: 'Improving digestive health through advanced diagnosis and treatment',
    link: 'gastroenterology',
    heading: "Improving Digestive Health",
    p1: "The gastroenterology department specializes in the diagnosis and treatment of digestive system disorders. Our team of experienced gastroenterologists and other healthcare professionals provide comprehensive care for conditions affecting the esophagus, stomach, intestines, liver, pancreas, and gallbladder.",
    p2: "Our gastroenterologists provide expert care for various digestive conditions, such as GERD, inflammatory bowel disease (IBD), irritable bowel syndrome (IBS), and liver disease.",
  },
  {
    id: 10,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323821/645b2036b2f0b51c2b5f93fe_neurology-icon-doctr-x-webflow-template_d8ofeg.svg',
    title: 'Neurology',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1729669012/steptodown.com114884_st9ik6.jpg',
    description: 'Providing expert care for brain, spine, and nervous system conditions',
    link: 'neurology',
    heading: "Expert Care for Your Nervous System",
    p1: "The neurology department provides comprehensive care for conditions affecting the brain, spinal cord, and nerves. Our team of neurologists and other healthcare professionals diagnose and treat a wide range of neurological disorders, from headaches and migraines to stroke and epilepsy.",
    p2: "Our neurologists provide expert care for various conditions, such as stroke, epilepsy, multiple sclerosis (MS), Parkinson's disease, and Alzheimer's disease.",
  },
  {
    id: 11,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323840/645b203df0b7304e24a46279_nutrition-icon-doctr-x-webflow-template_w4yq3u.svg',
    title: 'Nutrition',
    description: 'Providing expert guidance on nutrition for all ages and health conditions',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730449983/6555b011943eef6ca327e830_navigating-womens-health-insights-and-advice_eockgv.jpg',
    link: 'nutrition',
    heading: "Nourishing Your Health",
    p1:"The nutrition department is dedicated to helping you achieve optimal health and well-being through personalized nutrition counseling. Our registered dietitians provide expert guidance and support to help you make informed food choices and develop healthy eating habits.",
    p2: "We believe in a holistic approach to nutrition that considers your individual needs, preferences, and lifestyle. We work collaboratively with you to develop sustainable healthy eating habits that promote long-term health and well-being.",
  },
  {
    id: 12,
    icon: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1730323858/645b2057d2b6d1cefca00cd1_plastic-surgeons-icon-doctr-x-webflow-template_ek6fl4.svg',
    title: 'Plastic Surgeon',
    imageUrl: 'https://res.cloudinary.com/ddrylpaqx/image/upload/v1729669012/steptodown.com114884_st9ik6.jpg',
    description: 'Dedicated to providing natural-looking results and personalized surgical care',
    link: 'plasticSugeon',
    heading: "Enhancing Your Appearance, Restoring Confidence",
    p1: "The plastic surgery department offers a wide range of surgical and non-surgical procedures to enhance your appearance and restore your confidence. Our board-certified plastic surgeons are experts in both aesthetic and reconstructive surgery, providing personalized care and natural-looking results.",
    p2: "We are committed to providing safe, effective, and personalized plastic surgery care that meets your individual needs and goals. We strive to achieve natural-looking results that enhance your natural beauty and boost your self-confidence.",
  },
];

const ServicesList = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div>
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-4 rounded-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <Link href={`./Service/${service.link}`} key={index}>
                <p className="text-blue-500 hover:underline text-center block">
                  Learn more →
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
