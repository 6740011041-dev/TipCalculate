import Image from 'next/image';
const AboutPage = () => {
  return (
    <div>
        <h1>AboutPage</h1>
         <Image
        src="https://blog-static.kkday.com/th/blog/wp-content/uploads/Japan_Tokyo_Tokyo-Tower_Ashutterstock_129611225.jpg"
        alt="ProfilePic" width={400} height={500}
      ></Image>
    </div>
  )
}

export default AboutPage