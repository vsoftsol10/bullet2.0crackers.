// src/components/ProductSliderStyled.js

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;

  .product-card {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    position: relative;
    overflow: hidden; /* Ensure overflow is hidden for consistent styling */
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03); /* Scale up slightly on hover */
    }

    .card-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }

    a {
      display: block; /* Ensure the entire card is clickable */
      text-decoration: none; /* Remove default underline */
      color: inherit; /* Inherit text color */
    }

    img {
      width: 100%;
      height: 200px; /* Set a fixed height to ensure uniform size */
      object-fit: cover; /* Crop image to cover its container */
      transition: transform 0.3s ease;
    }

    .product-details {
      display: none; /* Hide product details by default */
      padding: 10px;
      text-align: left; /* Align text to the left */
    }

    .quick-view-btn {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #ff7f00; /* Change to orange */
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .quick-view-btn:hover {
      background-color: #cc6600; /* Darker shade of orange for hover */
    }
  }

  .product-card.active .product-details {
    display: block; /* Show product details when the card is active */
  }
`;
