import Banner from "../../components/Banner";
import Feature from "../../components/Feature";

import ChatIcon from '../../assets/img/icon-chat.png';
import SecurityIcon from '../../assets/img/icon-security.png';
import MoneyIcon from '../../assets/img/icon-money.png';


const Home = () => {

    return (
        <>
        <Banner>
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
        </Banner>
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <Feature 
                imgSrc={ChatIcon}
                imgAlt="Chat Icon"
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <Feature 
                imgSrc={MoneyIcon}
                imgAlt="Money Icon"
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            />
            <Feature 
                imgSrc={SecurityIcon}
                imgAlt="Security Icon"
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money is always safe."
            />
        </section>
        </>
    )
}

export default Home