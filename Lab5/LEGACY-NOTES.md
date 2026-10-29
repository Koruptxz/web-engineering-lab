# Legacy jQuery Analysis

## Native JavaScript Equivalents

1. `$(document).ready(fn)`: Handled automatically by `<script type="module">` or `DOMContentLoaded`.
2. `$("#name").val()`: `document.querySelector("#name").value`
3. `.after(html)`: `element.after(newElement)`
4. `$(".error").remove()`: `document.querySelectorAll(".error").forEach(el => el.remove())`
5. `.text(...).hide().fadeIn(400)`: `element.textContent = ...` paired with CSS opacity transitions.
6. `$form[0].reset()`: `form.reset()`

## Legacy Code Smells

- **`var` keyword**: Function-scoped variable declarations instead of block-scoped `const` or `let`.
- **Global `$.trim()` utility**: Using jQuery's static utility function instead of native `String.prototype.trim()`.
- **HTML string concatenation**: Dynamically injecting raw HTML strings into `.after()` instead of using `document.createElement()` and DOM APIs.
- **`indexOf("@") === -1`**: Checking substring presence using index comparison instead of `String.prototype.includes("@")`.
