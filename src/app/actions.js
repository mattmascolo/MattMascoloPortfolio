export async function subscribeToNewsletter(formData) {
    const email = formData.get('email');
    
    // Replace with your Google Apps Script URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwK1Qcu8YpTJAJ9nw7eO2Zup523B_P1UkQmN0DM3D29B5MGuAjx0JEdTaIEh3hawlgu/exec';
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
  
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to subscribe' };
    }
  }