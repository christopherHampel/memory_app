export const navigationService = {
  navigateTo(path: string): void {
    window.location.href = path;
  },

  navigateBack(): void {
    window.history.back();
  }
};