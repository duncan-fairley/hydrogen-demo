import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { CollectionDescription, CollectionTitle } from "./components/CollectionParts.client";
import { ProductCollectionLoader } from "./components/ProductCollectionLoader.client";
import { ProductDetailsLoader } from "./components/ProductDetailsLoader.client";
import { ProductDescription, ProductImage, ProductLink, ProductPrice, ProductPriceCents, ProductPriceDollars, ProductTitle } from "./components/ProductParts.client";
import { ProductsList } from "./components/ProductsList.client";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "38Xy6Etsio2WofKtc3VeyW",
      token: "NNQaUIsOysgvICJrNGLEUq53Jl0SmOE0xy8L2Ti18qnndWpCGnPrCi2vEl89bgBVGt26HlrLi2bZQclOZTA"
    }
  ]
});

PLASMIC.registerComponent(
  ProductCollectionLoader, {
    name: "ProductCollectionLoader",
    props: {
      collectionHandle: {
        type: "choice",
        options: ["freestyle-collection", "backcountry-collection"],
        defaultValue: "freestyle-collection"
      },
      count: {
        type: "number",
        defaultValue: 6
      },
      children: "slot"
    }
  }
);

PLASMIC.registerComponent(
  ProductDetailsLoader, {
    name: "ProductDetailsLoader",
    props: {
      productHandle: {
        type: "choice",
        options: ["mail-it-in-freestyle-snowboard", "snowboard", "the-full-stack"],
        defaultValue: "snowboard"
      },
      children: "slot"
    }
  }
);

PLASMIC.registerComponent(
  ProductsList, {
    name: "ProductsList",
    props: {
      children: "slot"
    }
  }
);

PLASMIC.registerComponent(
  ProductTitle, {
    name: "ProductTitle",
    props: {}
  }
);

PLASMIC.registerComponent(
  ProductPriceDollars, {
    name: "ProductPriceDollars",
    props: {}
  }
);

PLASMIC.registerComponent(
  ProductPriceCents, {
    name: "ProductPriceCents",
    props: {}
  }
);

PLASMIC.registerComponent(
  ProductPrice, {
    name: "ProductPrice",
    props: {}
  }
);

PLASMIC.registerComponent(
  ProductDescription, {
    name: "ProductDescription",
    props: {}
  }
);

PLASMIC.registerComponent(
  ProductImage, {
    name: "ProductImage",
    props: {}
  }
);

PLASMIC.registerComponent(
  ProductLink, {
    name: "ProductLink",
    props: {}
  }
);


PLASMIC.registerComponent(
  CollectionTitle, {
    name: "CollectionTitle",
    props: {}
  }
);

PLASMIC.registerComponent(
  CollectionDescription, {
    name: "CollectionDescription",
    props: {}
  }
);

console.log("DONE REGISTERING 3 COMPONENTS");