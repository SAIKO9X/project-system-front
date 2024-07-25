import api from "@/config/api";

export const createPayment =
  ({ planType, jwt }) =>
  async () => {
    try {
      const { data } = await api.post(
        `/api/payment/${planType}`,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );

      console.log("Payment link URL:", data.payment_link_url);

      if (data.payment_link_url) {
        window.location.href = data.payment_link_url;
      }
    } catch (error) {
      console.error("Erro ao criar pagamento:", error);
    }
  };
