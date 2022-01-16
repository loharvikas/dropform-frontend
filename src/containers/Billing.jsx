import React, { useContext } from 'react';
import { Pricing } from '../components';
import pricingJSON from '../fixtures/pricing.json';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';

let BACKEND_URL = ''
if (process.env.REACT_APP_DEVELOPMENT_MODE === 'true') {
    BACKEND_URL = process.env.REACT_APP_LOCAL_BACKEND_URL
} else {
    BACKEND_URL = process.env.REACT_APP_BASE_BACKEND_URL
}

const BillingContainer = () => {
    const { user } = useContext(AuthContext);

    return (
        <Wrapper direction='column'>
            {user &&
                <FormWrapper>
                    <form
                        method="POST"
                        action={`${BACKEND_URL}/create-customer-portal/${user?.id}/`}
                    >
                        <button type="submit">
                            Manage billing
                        </button>
                    </form>
                </FormWrapper>
            }
            <Wrapper direction='row'>
                {
                    pricingJSON.pricingInfo.map(item => (
                        <Pricing key={item.id}>
                            <div>
                                <Pricing.Title>{item.type}</Pricing.Title>
                                <Pricing.Text><span>&#8377;{item.price}</span> / month</Pricing.Text>
                                <Pricing.Text>{item.description}</Pricing.Text>
                                {item.features.map((feature, index) => (
                                    <Pricing.SmallText key={index}>{feature}</Pricing.SmallText>
                                ))}
                            </div>
                            {
                                user?.paid_user === false &&
                                <form
                                    action={`${BACKEND_URL}/create-checkout-session/${item.type}/${user.id}/`
                                    }
                                    method="POST"
                                >
                                    <Pricing.Button type="submit">Choose Plan</Pricing.Button>
                                </form>
                            }
                        </Pricing>
                    ))
                }
            </Wrapper>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background: var(--WHITE-999); */
    padding: 10px 5px;
    border-radius: 3px;
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
`;

const FormWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-left: 10px;
`


export default BillingContainer;