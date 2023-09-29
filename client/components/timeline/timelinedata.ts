// TODO fix up with what im actually using
export interface TimelineData {
  text: string,       // Text within the Timeline Item 
  date: string,       // Date for when the Timeline Item happened
  category?: Category, // TODO Maybe remove
  link?: Link,         // Information to link to
}

interface Category{
  tag: string,        // Name of the Category
  color: string,      // Background color for the Category
}

interface Link{
  url: string,        // URL of the link
  text: string,       // Text for the anchor tag
}
