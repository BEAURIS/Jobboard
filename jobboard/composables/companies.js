import {ref} from 'vue';
import axios from 'axios';
import { useRouter} from 'vue-router';

export default function useCompanies(){
    const companies = ref([]);
    const company = ref([]);

    const destroyCompanies = async(id) => {
        await axios.delete('http://127.0.0.1:8000/api/companies/' + id)
    }

    return {
        companies,
        destroyCompanies
    }
}