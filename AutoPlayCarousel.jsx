import React from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = 6; // Update this to the number of images you have
const noOfCards = 3;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 250px;
  position: relative;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
  &:hover .overlay {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const images = [
  { src: '/assets/bijili.jpg', name: 'Bijili', stock: 'Available' },
  { src: '/assets/giftpack1.jpg', name: 'Gift Pack 1', stock: 'Available' },
  { src: '/assets/flowerpot.jpg', name: 'Flower Pot', stock: 'Out of Stock' },
  { src: '/assets/rockets.jpg', name: 'Rockets', stock: 'Available' },
  { src: '/assets/saravedi.jpg', name: 'Saravedi', stock: 'Available' },
  { src: '/assets/sparklers.jpg', name: 'Sparklers', stock: 'Out of Stock' },
];

const carouselItems = images.map((item, index) => (
  <SlideItem key={index}>
    <Image src={item.src} alt={`Product ${index + 1}`} />
    <Overlay className="overlay">
      <h3>New Arrivals</h3>
      <Button onClick={() => alert(`${item.name}\nStock: ${item.stock}`)}>Quick View</Button>
    </Overlay>
  </SlideItem>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<button>{'>'}</button>}
          leftChevron={<button>{'<'}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}


