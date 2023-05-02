import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const Review = () => {
    return (
        <div className='mt-5'>
            <div>
            <h2 className='text-center fw-semibold text-secondary'>What Our Client Say!!</h2>
          <Marquee className='mt-4'>

                <Card className='me-5' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Josh Butler</Card.Title>
                <Card.Text className='text-center'>
                The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing – everything we tasted melted in other mouths. Absolutely the best meal we had while in. 
                </Card.Text>
                <div className='d-flex '>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStarHalfAlt className='text-warning ms-1'></FaStarHalfAlt>
                    <FaStarHalfAlt className='text-warning ms-1'></FaStarHalfAlt>

                </div>
            </Card.Body>
             </Card>

                <Card className='me-5'  style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Gordon Ramsay</Card.Title>
                <Card.Text className='text-center'>
                The Croque Monsieur at Buvette in Paris was absolutely delicious. The bread was perfectly toasted and the ham and gruyere cheese were melted to perfection. The addition of béchamel sauce added a creamy texture that took the dish to the next level. It was the perfect savory brunch dish to enjoy with a cup of coffee.
                </Card.Text>
                <div className='d-flex '>
                <FaStarHalfAlt className='text-warning ms-1'></FaStarHalfAlt>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                </div>
            </Card.Body>
             </Card>
                <Card className='me-5'  style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Maxwell Steve</Card.Title>
                <Card.Text className='text-center'>
                This dish was simply exquisite. The tuna was perfectly cooked and seasoned, and the foie gras added a richness that elevated the flavors even further. The toasted baguette provided a satisfying crunch to the dish, and the presentation was beautiful. It's easy to see why Le Bernardin is considered one of the best restaurants in the world.
                </Card.Text>
                <div className='d-flex '>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStarHalfAlt className='text-warning ms-1'></FaStarHalfAlt>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                </div>
            </Card.Body>
             </Card>
                <Card className='me-5'  style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>David Miler</Card.Title>
                <Card.Text className='text-center'>
                Gjelina's wood oven roasted cauliflower was a real standout. The cauliflower was cooked to the perfect level of tenderness, with a slightly charred exterior that added a depth of flavor. The addition of garlic, chili flakes, and lemon added a wonderful kick of spice and acidity that balanced the dish perfectly. It's a vegetarian dish that even meat-lovers will enjoy, and I highly recommend giving it a try.
                </Card.Text>
                <div className='d-flex '>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStar className='text-warning ms-1 '></FaStar>
                    <FaStarHalfAlt className='text-warning ms-1'></FaStarHalfAlt>
                </div>
            </Card.Body>
             </Card>
        

            </Marquee>
          </div>
        </div>
    );
};

export default Review;