function learnMore() {
    alert("Stay tuned for more updates on our hosting services!");
}
<script>
    // Get all nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    // Loop through links to add active class to the current page
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
</script>
