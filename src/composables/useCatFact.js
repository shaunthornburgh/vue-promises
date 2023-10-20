import { ref } from 'vue';

export default function useCatFact() {
    const loading = ref(true);
    const error = ref(null);
    const fact = ref(null);
    async function fetchFact() {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            fact.value = data.fact;
        } catch (err) {
            error.value = "Failed to fetch data.";
        } finally {
            loading.value = false;
        }
    }
    return {
        loading,
        error,
        fact,
        fetchFact
    };
}