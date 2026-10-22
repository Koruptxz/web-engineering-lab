function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof window !== "undefined") {
  document.getElementById("greeting").innerText = greet("Tayyab");
}

// Export for Node.js testing environment
if (typeof module !== "undefined") {
  module.exports = greet;
}
