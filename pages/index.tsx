import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                <span style={{ color: "orange" }}>In</span>surance, <span style={{ color: "orange" }}>simplified</span>
            </h1>
            <p style={{ marginBottom: "30px" }}>
                Find the best auto insurance rates, optimized by AI.
            </p>
            
            <div style={{ marginBottom: "30px" }}>
                <input type="checkbox" id="home" name="insuranceType" value="home" />
                <label htmlFor="home"> Home</label>
                
                <input type="checkbox" id="auto" name="insuranceType" value="auto" style={{ marginLeft: "10px" }} />
                <label htmlFor="auto"> Auto</label>
            </div>
            
            <input 
                type="text" 
                placeholder="Enter Postal Code" 
                style={{ padding: "10px", borderRadius: "5px", marginBottom: "20px" }}
            />
            
            <br />
            
            <Link href="/get-a-quote">
                <button className="button">Start</button>
            </Link>
            
            <div style={{ marginTop: "50px", textAlign: "left", maxWidth: "600px" }}>
                <h2>How It Works</h2>
                <p><strong>1. Enter Your Details:</strong> Provide your postal code and select the type of insurance you need.</p>
                <p><strong>2. AI Comparison:</strong> Our AI scans multiple insurers to find the best rates for your situation.</p>
                <p><strong>3. Get Your Quote:</strong> Receive an optimized insurance quote tailored to your needs.</p>
            </div>
        </div>
    );
}
