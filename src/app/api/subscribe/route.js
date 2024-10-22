// app/api/subscribe/route.js
export async function POST(request) {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxEVqZjMTDPQvTo_vP8tkwv-8y0osD2WHGP_t9OGgxFIrOYCFB3Q09sYGXlCInWLESg/exec';
    
    try {
      const data = await request.formData();
      const email = data.get('email');
      
      console.log('Sending email:', email); // Debug log
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }) // Send as JSON instead
      });
      
      const result = await response.text();
      console.log('Google response:', result); // Debug log
      
      return Response.json({ success: true });
    } catch (error) {
      console.error('Newsletter error:', error);
      return Response.json({ success: true });
    }
  }