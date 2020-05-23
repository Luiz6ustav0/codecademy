const apiKey = "mSCXjkLHzteWOPWsYb3jEaya6b5EdS7nuRCjS9RTGhoscgJzO5ml95SQYluZxNMLaskh-IqA_NiohxFkmStGfnDv1Zlu0dNz_Cnsv7fLRub-dJ4IS4fp6otYMJLIXnYx";

export const Yelp = {
    async search(term, location, sortBy){
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, headers = { Authorization: `Bearer ${apiKey}` });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.display_address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.category.map(catgry => catgry.title),
                    rating: business.rating,
                    reviewCount: business.review_count,
                };
            });
        }
    }
}
