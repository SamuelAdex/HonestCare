import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import { Section } from '../components/Section'
import MOTHER from "../assets/img/mother.png";
import BABY from "../assets/img/baby.png";
import BOX from "../assets/img/box.png";
import { Header } from '../components/Header';

export default function Home() {
    const click = () => {
        alert('works');
    }
    return (
        <>
            <Hero />
            <About />

            <Section
                backGround={'bg-pink'}
                type={'imgLeft'}
                image={MOTHER}
                content={'A new mom will experience a roller-coaster of emotions—extreme happiness, frustration, exhaustion, heart-bursting love. At this time what she needs is support navigating the early tasks and emotions of parenthood and recovering from birth'}
                btnText={'Gift a new mother'}
                onClick={click}
            />
            <Section
                backGround={'bg-pink'}
                image={BABY}
                content={'Customized bundles give you the option of choosing from a selection from the best brands of related products in order to create the bundle you find most appealing Honest care also offers you discounts based on the number of products selected'}
                btnText={'Customize a Bundle now'}
                onClick={click}
            />

            <div className='pt-10 w-[85vw] md:w-[90vw] mx-auto '>
                <Header title={'What am i getting in a bundle?'} />
                <Section
                    image={BOX}
                    content={'Customized bundles give you the option of choosing from a selection from the best brands of related products in order to create the bundle you find most appealing Honest care also offers you discounts based on the number of products selected'}
                    btnText={'Subscribe to a Bundle now'}
                    onClick={click}
                />
            </div>
        </>
    )
}
