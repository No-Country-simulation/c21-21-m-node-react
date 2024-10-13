import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

config.autoAddCss = false;

const RootLayout = ({ children }) => {
    return (
      	<html lang="en">
      		<body>{children}</body>
    	</html>
  	);
}

export default RootLayout
