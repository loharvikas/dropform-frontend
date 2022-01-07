import React, { useContext } from 'react';
import { Pricing } from '../components';
import pricingJSON from '../pricing.json';
import styled from 'styled-components';
import { GlobalButton } from '../globalStyles';
import { AuthContext } from '../context/AuthContext';

const BillingContainer = () => {
    const { user } = useContext(AuthContext);

    return (
        <Wrapper>
            <form
                method="POST"
                action={`http://localhost:8000/create-customer-portal/${user.id}/`}
            >
                <button type="submit" >
                    Manage billing
                </button>
            </form>
            {pricingJSON.pricingInfo.map(item => (
                <Pricing key={item.id}>
                    <div>
                        <Pricing.Title>{item.type}</Pricing.Title>
                        <Pricing.Text><span>&#8377;{item.price}</span> / month</Pricing.Text>
                        <Pricing.Text>{item.description}</Pricing.Text>
                        {item.features.map((feature, index) => (
                            <Pricing.SmallText key={index}>{feature}</Pricing.SmallText>
                        ))}
                    </div>
                    <form
                        action={`http://localhost:8000/create-checkout-session/${item.type}/${user.id}/`
                        }
                        method="POST"
                    >
                        <Pricing.Button type="submit">Choose Plan</Pricing.Button>
                    </form>
                </Pricing>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    background: var(--WHITE-999);
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const Frame = styled.div`
    display: flex;
`;



export default BillingContainer;