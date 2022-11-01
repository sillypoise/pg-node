import { Configuration, V0alpha2Api } from "@ory/client";

/*
  In docker example:
  KRATOS_PUBLIC_URL → http://kratos:4433/ (intranet)
  KRATOS_BROWSER_URL → http://127.0.0.1:4433

  I think its just to reference a docker port or browser port
*/

const apiBaseUrlInternal =
    process.env["KRATOS_PUBLIC_URL"] ||
    process.env["ORY_SDK_URL"] ||
    "https://playground.projects.oryapis.com";

export const apiBaseUrl =
    process.env["KRATOS_BROWSER_URL"] || apiBaseUrlInternal;

// Set up the ory client SDK
let sdk = new V0alpha2Api(
    new Configuration({
        basePath: apiBaseUrlInternal,
        // accessToken: "Your personal access token"
    })
);

export { sdk };
