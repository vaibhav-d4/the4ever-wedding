/// <reference types="vite/client" />

declare module '*.jpg?w=800&format=webp' {
  const src: string;
  export default src;
}

declare module '*.jpeg?w=800&format=webp' {
  const src: string;
  export default src;
}

declare module '*.png?w=800&format=webp' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
