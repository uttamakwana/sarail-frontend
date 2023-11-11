export function loadingAnimation(setLoadingState) {
  setTimeout(() => {
    setLoadingState(false);
  }, 5000);
}
