import './about.css'

export default function about() {

    return (
        <>
            <div id='about'>

                <div id='aboutimg'> <div>
                    <img id='aboutusimg' src='https://media.istockphoto.com/vectors/about-us-rgb-color-icon-vector-id1256096552?k=20&m=1256096552&s=612x612&w=0&h=kA-OfVVMSmx6OeXvmAI2vflO4S15yVHQRTP2_yY-KVI=' alt='notfound' />
                </div>
                    <img
                        id='iti'
                        src='https://scontent.fcai21-1.fna.fbcdn.net/v/t1.6435-9/107368467_157916995837605_7799445593081337425_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C8x7vEiqgYsAX9ox3Y_&_nc_ht=scontent.fcai21-1.fna&oh=00_AT8SdCWI8kC79dkZGXZqCQiPzhnlIOZYTDvf2hfPhEHahg&oe=633F6AA4'
                        alt='notfound'
                    />
                </div>

                <div id='abouttext'>
                    <h2 id='abouttitle'>About Us</h2>
                    <p id='aboutdesc'>This site was designed by the trainee Mohamed El-Bahrawy
                        <br /> under the supervision of trainer Eng\Mahmoud Meky in the React Native summer training course for 2022.
                        <br /> Without the help of the traniers, this site would not have existed,
                        <br /> so the designer and the trainee would like to thank all the trainers,
                        <br /> especially  Eng\Mahmoud Meky, who is responsible for supervising the React course period And for this project</p>
                    <h3 id='contact'>Contact us</h3>
                    <div id='social'>
                        <a href='https://www.facebook.com/Mb47l'><button className='facebook'>Facebook</button></a>
                        <a href='https://twitter.com/Medo_elbahrawy'><button className='twitter'>Twitter</button></a>
                        <a href='https://www.linkedin.com/in/m-el-bahrawy/'><button className='linkedin'>LinkedIn</button></a>
                        <a href='https://github.com/mohamedelbahrawy512'><button className='github'>Github</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}