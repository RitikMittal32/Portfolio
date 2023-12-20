
        /**
         * Horizontally scrolls into view the target element of a container.
         * @param {HTMLElement} container
         * @param {HTMLElement} target
         */
        export function hrScrollIntoView(container, target) {
          const targetRect = target.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
        
          // Scroll to the target position
          container.scrollTo({
            left: container.scrollLeft + targetRect.left - containerRect.left,
            behavior: "smooth",
          });
        }


        
        /**
         * Scrolls the image cards to the previous card;
         * @param {React.Ref} cardsScrollElm
         * @param {React.Ref} currCardIndex
         * @param {React.Ref} lastScrollTime Used for stopping click spamming
         * @param {Number} scrollCoolDownTime Used for stopping click spamming, higher the number the more cool down there is after each scroll
         */
        export function scrollPrevious(
          cardsScrollElm,
          currCardIndex,
          lastScrollTime,
          scrollCoolDownTime,
          data
        ) {
          if (Date.now() - lastScrollTime.current > scrollCoolDownTime) {
            currCardIndex.current =
              currCardIndex.current == 0
                ? data.length - 1
                : currCardIndex.current - 1;
            hrScrollIntoView(
              cardsScrollElm.current,
              cardsScrollElm.current.children[currCardIndex.current]
            );
            lastScrollTime.current = Date.now();
          }
        }
        
        /**
         * Scrolls the image cards to the next card;
         * @param {React.Ref} cardsScrollElm
         * @param {React.Ref} currCardIndex
         * @param {React.Ref} lastScrollTime Used for stopping click spamming
         * @param {Number} scrollCoolDownTime Used for stopping click spamming, higher the number the more cool down there is after each scroll
         */
        export function scrollNext(
          cardsScrollElm,
          currCardIndex,
          lastScrollTime,
          scrollCoolDownTime,
          Speaker_data
        ) {
          if (Date.now() - lastScrollTime.current > scrollCoolDownTime) {
            currCardIndex.current =
              currCardIndex.current == Speaker_data.length - 1
                ? 0
                : currCardIndex.current + 1;
            hrScrollIntoView(
              cardsScrollElm.current,
              cardsScrollElm.current.children[currCardIndex.current]
            );
            lastScrollTime.current = Date.now();
          }
        }
        