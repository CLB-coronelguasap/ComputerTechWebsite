import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

document.addEventListener("DOMContentLoaded", () => {
    // Define primary colors for light and dark themes
    const lightPrimary = "#e8f1f2"; // Alice Blue
    const darkPrimary = "#193230"; // Gunmetal

    // Generate themes
    const lightTheme = themeFromSourceColor(argbFromHex(lightPrimary)).schemes.light;
    const darkTheme = themeFromSourceColor(argbFromHex(darkPrimary)).schemes.dark;

    // Apply theme colors to CSS variables
    function applyTheme(theme) {
        document.documentElement.style.setProperty("--background", theme.background.toString());
        document.documentElement.style.setProperty("--on-background", theme.onBackground.toString());
        document.documentElement.style.setProperty("--primary", theme.primary.toString());
        document.documentElement.style.setProperty("--on-primary", theme.onPrimary.toString());
        document.documentElement.style.setProperty("--surface", theme.surface.toString());
        document.documentElement.style.setProperty("--on-surface", theme.onSurface.toString());
    }

    // Toggle between light and dark themes
    const themeToggleButton = document.getElementById("theme-toggle");
    console.log(themeToggleButton); // Should not be null

    if (themeToggleButton) {
        let isDarkMode = false;

        // Save and load theme preference
        const savedTheme = localStorage.getItem("theme") || "light";
        isDarkMode = savedTheme === "dark";
        applyTheme(isDarkMode ? darkTheme : lightTheme);

        // Save the preference when toggling
        themeToggleButton.addEventListener("click", () => {
            console.log("Button clicked!"); // Check if the event listener is triggered
            isDarkMode = !isDarkMode;
            const theme = isDarkMode ? darkTheme : lightTheme;
            applyTheme(theme);
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");

            // Update the button icon
            themeToggleButton.innerHTML = isDarkMode
                ? '<span class="material-symbols-outlined">light_mode</span>'
                : '<span class="material-symbols-outlined">dark_mode</span>';
        });
    } else {
        console.error("Theme toggle button not found!");
    }
});