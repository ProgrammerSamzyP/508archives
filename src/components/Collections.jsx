import React from "react";
import { COLORS, FONTS } from "../styles/tokens";
import { Tag, GhostButton } from "./Shared";

/* =========================================================
   COLLECTION DATA
========================================================= */

const PLACEHOLDER_COLLECTIONS = [
  {
    id: "01",
    name: "Collection 01 — The Archive",
    year: "2026",
    image: "/images/collection1.jpg",
  },
  {
    id: "02",
    name: "Collection 02 — Field Notes",
    year: "2026",
    image: "/images/collection2.jpg",
  },
];

/* =========================================================
   COLLECTION BLOCK
========================================================= */

function CollectionBlock({ collection, reverse }) {
  return (
    <article
      className={`collection-block ${
        reverse ? "collection-reverse" : ""
      }`}
    >
      {/* ===================================================
          IMAGE
      =================================================== */}

      <div className="collection-image-wrapper">
        {collection.image ? (
          <img
            src={collection.image}
            alt={collection.name}
            className="collection-image"
            loading="lazy"
          />
        ) : (
          <div className="collection-image-placeholder">
            IMAGE
          </div>
        )}
      </div>

      {/* ===================================================
          COLLECTION INFORMATION
      =================================================== */}

      <div className="collection-copy">

        <div className="collection-copy-inner">

          {/* Location + year */}

          

          {/* Title */}

          <h3 className="collection-title">
            {collection.name}
          </h3>

          {/* Small divider */}

         

          {/* Description */}

          

          {/* Button */}

          <div className="collection-button">
            <GhostButton>
              Explore collection →
            </GhostButton>
          </div>

        </div>

      </div>
    </article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Collections({
  collections = PLACEHOLDER_COLLECTIONS,
}) {
  return (
    <section
      className="collections-section"
      style={{
        background: COLORS.ink,
      }}
    >
      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="collections-header">

        <div className="collections-heading">

          

          <h2>
            Collections
          </h2>

        </div>

        

      </header>

      {/* ===================================================
          COLLECTIONS
      =================================================== */}

      <div className="collections-list">

        {collections.map((collection, index) => (
          <CollectionBlock
            key={collection.id}
            collection={collection}
            reverse={index % 2 === 1}
          />
        ))}

      </div>

      {/* ===================================================
          STYLES
      =================================================== */}

      <style>{`

        /* =================================================
           SECTION
        ================================================= */

        .collections-section {
          width: 100%;
          overflow: hidden;
        }


        /* =================================================
           HEADER
        ================================================= */

        .collections-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          gap: 40px;

          padding:
            80px
            40px
            42px;
        }


        .collections-heading {
          display: flex;
          align-items: baseline;

          gap: 18px;
        }


        .collections-heading h2 {
          margin: 0;

          font-family: ${FONTS.display};

          font-size: clamp(
            30px,
            3.5vw,
            44px
          );

          font-weight: 400;

          line-height: 1;

          letter-spacing: -0.025em;

          color: ${COLORS.bone};
        }


        .collections-intro {
          margin: 0;

          max-width: 280px;

          font-family: ${FONTS.body};

          font-size: 12px;

          line-height: 1.6;

          letter-spacing: 0.02em;

          color: ${COLORS.ash};

          text-align: right;
        }


        /* =================================================
           COLLECTION BLOCK
        ================================================= */

        .collection-block {
          width: 100%;

          display: flex;

          border-top:
            1px solid ${COLORS.line};

          border-bottom:
            1px solid ${COLORS.line};

          min-height: 520px;
        }


        /* =================================================
           ALTERNATING DESKTOP LAYOUT
        ================================================= */

        .collection-block.collection-reverse {
          flex-direction: row-reverse;
        }


        /* =================================================
           IMAGE
        ================================================= */

        .collection-image-wrapper {
          position: relative;

          flex: 1;

          min-width: 0;

          aspect-ratio: 16 / 10;

          overflow: hidden;

          background: #141210;
        }


        .collection-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.8s
            cubic-bezier(
              0.2,
              0.7,
              0.2,
              1
            );

          filter: saturate(0.88);
        }


        /* =================================================
           IMAGE HOVER
        ================================================= */

        .collection-block:hover
        .collection-image {
          transform: scale(1.035);

          filter: saturate(1);
        }


        /* =================================================
           IMAGE PLACEHOLDER
        ================================================= */

        .collection-image-placeholder {
          width: 100%;
          height: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          font-family: ${FONTS.mono};

          font-size: 11px;

          letter-spacing: 0.08em;

          color: ${COLORS.line};
        }


        /* =================================================
           COPY
        ================================================= */

        .collection-copy {
          flex: 1;

          min-width: 0;

          display: flex;

          align-items: center;

          background: ${COLORS.ink};

          padding:
            50px;
        }


        .collection-copy-inner {
          width: 100%;

          max-width: 460px;
        }


        /* =================================================
           META
        ================================================= */

        .collection-meta {
          margin: 0 0 18px;

          font-family: ${FONTS.mono};

          font-size: 10px;

          line-height: 1.5;

          letter-spacing: 0.1em;

          text-transform: uppercase;

          color: ${COLORS.ash};
        }


        /* =================================================
           TITLE
        ================================================= */

        .collection-title {
          margin: 0;

          font-family: ${FONTS.display};

          font-size: clamp(
            28px,
            3.2vw,
            42px
          );

          font-weight: 400;

          line-height: 1.05;

          letter-spacing: -0.025em;

          color: ${COLORS.bone};
        }


        /* =================================================
           DIVIDER
        ================================================= */

        .collection-divider {
          width: 45px;

          height: 1px;

          margin:
            28px
            0
            22px;

          background:
            ${COLORS.line};
        }


        /* =================================================
           DESCRIPTION
        ================================================= */

        .collection-description {
          max-width: 340px;

          margin: 0;

          font-family: ${FONTS.body};

          font-size: 12px;

          line-height: 1.7;

          letter-spacing: 0.015em;

          color: ${COLORS.ash};
        }


        /* =================================================
           BUTTON
        ================================================= */

        .collection-button {
          margin-top: 30px;
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {

          .collections-header {
            padding:
              65px
              24px
              35px;
          }


          .collection-copy {
            padding:
              35px;
          }


          .collection-title {
            font-size:
              clamp(
                26px,
                4vw,
                36px
              );
          }


          .collection-description {
            font-size: 11px;
          }

        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 720px) {

          /* ---------------------------------------------
             HEADER
          ---------------------------------------------- */

          .collections-header {
            display: block;

            padding:
              65px
              18px
              30px;
          }


          .collections-heading {
            display: flex;

            flex-direction: column;

            align-items: flex-start;

            gap: 12px;
          }


          .collections-heading h2 {
            font-size: 36px;
          }


          .collections-intro {
            max-width: 320px;

            margin-top: 18px;

            text-align: left;

            font-size: 11px;

            line-height: 1.6;
          }


          /* ---------------------------------------------
             COLLECTION
          ---------------------------------------------- */

          .collection-block,
          .collection-block.collection-reverse {

            display: flex;

            flex-direction: column;

            min-height: auto;
          }


          /* ---------------------------------------------
             IMAGE
          ---------------------------------------------- */

          .collection-image-wrapper {

            width: 100%;

            aspect-ratio: 4 / 5;

            flex: none;
          }


          .collection-image {

            object-position: center center;
          }


          /* ---------------------------------------------
             COPY
          ---------------------------------------------- */

          .collection-copy {

            width: 100%;

            flex: none;

            padding:
              28px
              18px
              34px;

            display: block;
          }


          .collection-copy-inner {

            max-width: none;

            width: 100%;
          }


          /* ---------------------------------------------
             META
          ---------------------------------------------- */

          .collection-meta {

            margin-bottom: 14px;

            font-size: 9px;

            letter-spacing: 0.09em;
          }


          /* ---------------------------------------------
             TITLE
          ---------------------------------------------- */

          .collection-title {

            font-size: 32px;

            line-height: 1.05;

            max-width: 340px;
          }


          /* ---------------------------------------------
             DIVIDER
          ---------------------------------------------- */

          .collection-divider {

            margin:
              22px
              0
              18px;
          }


          /* ---------------------------------------------
             DESCRIPTION
          ---------------------------------------------- */

          .collection-description {

            max-width: 340px;

            font-size: 12px;

            line-height: 1.65;
          }


          /* ---------------------------------------------
             BUTTON
          ---------------------------------------------- */

          .collection-button {

            width: 100%;

            margin-top: 26px;
          }


          .collection-button > * {

            width: 100%;
          }

        }


        /* =================================================
           SMALL PHONES
        ================================================= */

        @media (max-width: 390px) {

          .collections-header {

            padding:
              55px
              14px
              26px;
          }


          .collections-heading h2 {

            font-size: 32px;
          }


          .collections-intro {

            font-size: 10px;

            max-width: 290px;
          }


          .collection-image-wrapper {

            aspect-ratio: 4 / 5;
          }


          .collection-copy {

            padding:
              24px
              14px
              30px;
          }


          .collection-title {

            font-size: 29px;
          }


          .collection-description {

            font-size: 11px;
          }

        }


        /* =================================================
           TOUCH DEVICES
        ================================================= */

        @media (hover: none) {

          .collection-block:hover
          .collection-image {

            transform: none;

            filter: saturate(0.88);
          }

        }

      `}</style>
    </section>
  );
}