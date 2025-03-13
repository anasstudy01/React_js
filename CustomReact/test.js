// Function to render a custom element
function renderElement(element, container) {
    // Create a DOM element based on the type specified in the element
    const domElement = document.createElement(element.type);
  
    // Set the inner HTML of the DOM element to the children property of the element
    domElement.innerHTML = element.children;
  
    // Loop through the properties of the element and set them as attributes on the DOM element
    for (const prop in element.props) {
      if (prop === 'children') continue; // Skip the children property
      domElement.setAttribute(prop, element.props[prop]);
    }
  
    // Append the created DOM element to the container
    container.appendChild(domElement);
  }
  
  // Define a custom element with type, properties, and children
  const customElement = {
    type: 'a',
    props: {
      href: 'https://www.google.com',
      target: '_blank'
    },
    children: 'Click me to visit Google'
  };
  
  // Get the container element by its ID
  const container = document.getElementById('root');
  
  // Render the custom element inside the container
  renderElement(customElement, container);